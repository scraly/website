<script lang="ts">
  import FeatureTableHeader from "./feature-table-header.svelte";
  import FeatureTableItem from "./feature-table-item.svelte";
  import type { FeatureTableColumn } from "../feature-table.types";

  export let featureData: FeatureTableColumn;

  const shadow = featureData.isHighlighted ? "shadow-brand" : "shadow-normal";
</script>

<div class="p-4 bg-[#f9f9f9] {shadow} rounded-3xl">
  <FeatureTableHeader headerData={featureData.header} />
  <section
    class="grid grid-cols-1 auto-rows-[3.75rem] border-t-2 border-divider pt-4 inner-grid-desktop"
  >
    {#each featureData.items as item}
      <FeatureTableItem definition={item} />
    {/each}
    {#if featureData.link}
      <div class="flex justify-center items-start">
        <a
          href={featureData.link.href}
          class="btn-cta"
          class:btn-primary={featureData.isHighlighted}
          >{featureData.link.label}</a
        >
      </div>
    {/if}
  </section>
</div>
