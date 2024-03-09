import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    snapchat_marketing: {
      type: "app",
      app: "snapchat_marketing",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://adsapi.snapchat.com/v1/me`,
      headers: {
        Authorization: `Bearer ${this.snapchat_marketing.$auth.oauth_access_token}`,
      },
    })
  },
})
