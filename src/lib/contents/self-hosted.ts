import type { TableData } from "$lib/types/table-data.type";
import type { Pricing } from "$lib/types/pricing.type";
import { isEurope } from "$lib/utils/helpers";
import type { FAQ } from "../types/faq.type";

export const pricingPlans: Pricing[] = [
  {
    title: "Community",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "Open Source",
    features: [
      "Unlimited users",
      "Public & private repos",
      "GitLab, GitHub and Bitbucket",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "community",
  },
  {
    title: "Free",
    price: `${isEurope() ? "€" : "$"}0`,
    duration: "for the first 10 users",
    features: [
      "Public & private repos",
      "GitLab, GitHub and Bitbucket",
      "Prebuilds",
      "Shared Workspaces",
      "Snapshots",
      "Admin Dashboard",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "per user/month",
    features: [
      "Starts after the 11th user",
      "Everything from Free",
      "Standard support",
    ],
    btnText: "Register and Install now",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];

export const freePlanTableData: TableData = {
  title: "Free",
  subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  link: {
    text: "Install now",
    href: "/docs/self-hosted/latest",
  },
  details: [
    {
      term: "Public & Private Repos",
      availibility: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>10 registered users</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: true,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const professionalPlanTableData: TableData = {
  title: "Professional",
  subtitle: `${isEurope() ? "€29" : "$35"} per user/month`,
  link: {
    text: "Register and Install Now",
    href: "/enterprise-license",
  },
  details: [
    {
      term: "Public & Private Repos",
      availibility: true,
    },
    {
      term: "Team Limit",
      text: "<span class='font-bold'>unlimited</span>",
    },
    {
      term: "Inactivity timeout",
      text: "unlimited",
    },
    {
      term: "timeout Boost",
      text: "unlimited",
    },
    {
      term: "Parallel Workspaces",
      text: "unlimited",
    },
    {
      term: "prebuilds",
      text: "unlimited",
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: true,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const selfhostedFAQ: FAQ = {
  headline: "FAQs",
  items: [
    {
      title: "Can I create a team plan?",
      content:
        '<p> Of course! You can use Gitpod Self-Hosted Community on your own infrastructure for free for unlimited users. If you\'d like to try additional features like unlimited prebuilds, shared workspaces, snapshots and an admin dashboard, the Free tier is available without a license for the first 10 users. You can upgrade to to the Professional Plan at any time. Simply update your existing instance with a license key. Currently, Self-hosted Gitpod licenses can currently only be purchased through contacting sales. Please <a href="/enterprise-license" >request a license</a > key or <a href="/contact/sales">Get in touch</a> if you have any questions. </p>',
    },
    {
      title: "Can I add more users to my plan at any time?",
      content:
        "<p> Yes, you can add as many users as you like to your plan at any time. </p>",
    },
    {
      title: "What is the difference between SaaS and Self-Hosted?",
      content:
        "<p> If you choose <strong>Gitpod SaaS</strong>, we will manage and host Gitpod in the cloud for you. This means minimal setup efforts for you and secure data storage in the cloud. Gitpod SaaS is be the best solution for teams who want to get started immediately and don’t want to spend time on setup and operations. </p> <p> If you choose <strong>Gitpod Self-Hosted</strong>, you will manage and host Gitpod on your own instances. This means all data remains your infrastructure, as Gitpod can run behind corporate firewalls and on air-gapped networks. <strong>Gitpod Self-Hosted</strong> is the best solution for teams who want to keep full data control or use Gitpod in private networks. </p>",
    },
    {
      title: "How can I install Self-Hosted?",
      content:
        '<p> You can either install <strong>Gitpod Self-Hosted</strong> on Google GKE, Amazon EKS, Azure AKS, or K3s. See <a href="/docs/self-hosted/latest">Self-Hosted Docs</a> for more information. </p>',
    },
    {
      title: "How can I pay?",
      content:
        '<p> Currently, <strong>Gitpod Self-Hosted</strong> can only be purchased on request. Please <a href="/enterprise-license">request a license key</a> and we\'ll contact you. If you have any questions, please <a href="/contact/sales">Get in touch</a>. All our plans can be paid via invoice. </p>',
    },
    {
      title: "Do you offer discounts for educational institutions?",
      content:
        '<p> Yes, qualified educational institutions may receive a special discount. Please <a href="/contact/sales">Contact sales</a>. </p>',
    },
    {
      title: "Still have more questions?",
      content:
        '<p> We are happy to answer them, please <a href="/contact/support" >Get in Touch</a >. </p>',
    },
  ],
};
