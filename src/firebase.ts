// src/firebase.ts
// Firebase v10（モジュラSDK）想定
import {
  initializeApp,
  getApp,
  getApps,
  type FirebaseApp,
} from 'firebase/app'
import {
  getFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore'
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInAnonymously,
  connectAuthEmulator,
} from 'firebase/auth'
import { getAnalytics, isSupported } from 'firebase/analytics'

// --- 1) 環境変数の取り込み -----------------------------
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
  appId: import.meta.env.VITE_FIREBASE_APP_ID!,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} as const

// --- 2) アプリをシングルトンで初期化（HMR/重複初期化対策） ---
export const app: FirebaseApp =
  getApps().length ? getApp() : initializeApp(firebaseConfig)

// --- 3) サービスのシングルトン取得 ----------------------
export const db = getFirestore(app)
export const auth = getAuth(app)

// --- 4) Auth の永続化を明示（任意だが推奨） ---------------
// Local: ブラウザを閉じても維持 / Session: タブ/ウィンドウでのみ維持
setPersistence(auth, browserLocalPersistence).catch((e) => {
  // Safari プライベートモード等で失敗することがあるため、握りつぶして続行
  console.warn('[firebase] setPersistence failed:', e)
})

// --- 5) 匿名認証は「必要な時にだけ」行う ------------------
// 例：App.vue の onMounted で呼び出し、UI 初期化前にセッションを確保
export async function ensureAnonymousAuth(): Promise<void> {
  try {
    if (!auth.currentUser) {
      await signInAnonymously(auth)
      console.info('[firebase] Signed in anonymously')
    }
  } catch (error) {
    console.error('[firebase] Anonymous sign-in error:', error)
    // 必要に応じて UI へ通知
    throw error
  }
}

// --- 6) Analytics（ブラウザ限定・サポート環境のみ・IDあり） --
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  // isSupported() は Promise<boolean> を返す
  isSupported()
    .then((ok) => {
      if (ok) {
        getAnalytics(app)
      }
    })
    .catch(() => {
      /* サポート外でも無視して続行 */
    })
}
