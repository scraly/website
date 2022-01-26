<script context="module">
  export const prerender = true;
</script>

<script>
  import Explore from "$lib/components/explore.svelte";
  import Faqs from "$lib/components/self-hosted/faqs.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import PlansAndPricing from "$lib/components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "$lib/contents/self-hosted";
  import ViewAllFeatures from "$lib/components/self-hosted/view-all-features.svelte";
</script>

<OpenGraph
  data={{
    description: "Self-Host Gitpod on Your Own Infrastructure.",
    title: "Self-Hosted",
  }}
/>
<PlansAndPricing {pricingPlans} />
<ViewAllFeatures />
<Faqs />
<Explore
  contents={{
    title: "Install <div class='whitespace-nowrap inline'>Self-hosted</div>",
    description: `
      Install Gitpod Self-hosted on GKE, EKS, AKS, or K3s.
    `,
    link: { href: "/docs/self-hosted/latest", text: "View installation guide" },
  }}
/>
