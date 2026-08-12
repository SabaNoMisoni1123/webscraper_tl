<template>
  <!--
    横並びタイムライン 1 列分の共通フレーム。
    Atomic Design 上は、organism が業務ロジックを持ち、この molecule がカード骨格とスクロール領域を担います。
  -->
  <v-card class="timeline-column-frame">
    <slot name="header">
      <v-toolbar class="timeline-column-frame__toolbar" :density="toolbarDensity">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <template v-if="$slots.append" #append>
          <slot name="append" />
        </template>
      </v-toolbar>
    </slot>

    <slot name="status" />

    <div v-if="scroll" class="timeline-column-frame__scroll">
      <slot />
    </div>
    <slot v-else />
  </v-card>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  scroll?: boolean
  toolbarDensity?: 'default' | 'comfortable' | 'compact'
}>(), {
  title: '',
  scroll: true,
  toolbarDensity: 'default',
})
</script>

<style scoped>
.timeline-column-frame {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.timeline-column-frame__toolbar {
  position: sticky;
  top: 0;
  z-index: 1;
  flex: 0 0 auto;
  background: var(--v-theme-surface);
}

.timeline-column-frame__scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 8px;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}
</style>
