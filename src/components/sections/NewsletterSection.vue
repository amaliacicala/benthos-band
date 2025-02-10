<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import bg_lg from '/backgrounds/large/bg_red-lg.avif'
import bg_sm from '/backgrounds/small/bg_red-sm.avif'

const { mobile } = useDisplay()
</script>

<template>
  <v-lazy transition="fade-transition">
    <v-parallax :src="mobile ? bg_sm : bg_lg" :style="{ maxHeight: '460px' }">
      <v-container class="pt-16">
        <div class="pb-4">
          <p class="text-center text-overline text-brown-lighten-5">Sign up to our newsletter</p>
          <h1 class="text-center text-md-h1 text-h2 text-brown-lighten-5 px-6">Stay up to date</h1>
        </div>

        <div class="d-flex flex-column align-center text-primary">
          <!-- Mailchimp Widget -->
          <div id="mc_embed_shell" class="w-md-50">
            <div id="mc_embed_signup">
              <form
                action="https://benthos-band.us8.list-manage.com/subscribe/post?u=f1959023ac34053b6a723f83a&amp;id=a83c2e8ea0&amp;f_id=00bd04e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_self"
              >
                <div id="mc_embed_signup_scroll">
                  <div class="indicates-required d-md-block d-none text-caption text-right">
                    <span class="asterisk">*</span> required
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL" class="text-body-1"
                      >Email Address <span class="asterisk">*</span></label
                    >
                    <input
                      type="email"
                      name="EMAIL"
                      class="required email"
                      id="mce-EMAIL"
                      value=""
                    />
                  </div>
                  <div hidden=""><input type="hidden" name="tags" value="1028558" /></div>
                  <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display: none"></div>
                    <div class="response" id="mce-success-response" style="display: none"></div>
                  </div>
                  <div aria-hidden="true" style="position: absolute; left: -5000px">
                    /* real people should not fill this in and expect good things - do not remove
                    this or risk form bot signups */
                    <input
                      type="text"
                      name="b_f1959023ac34053b6a723f83a_a83c2e8ea0"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="optionalParent">
                    <div class="clear foot">
                      <v-btn
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        variant="outlined"
                        class="text-body-2 text-md-body-1 text-primary mr-4 w-50 w-md-25"
                        :size="mobile ? 'large' : 'x-large'"
                      >
                        Subscribe
                      </v-btn>
                    </div>
                  </div>

                  <div class="indicates-required d-md-none d-block text-caption text-right pt-4">
                    <span class="asterisk">*</span> required
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </v-container>
    </v-parallax>
  </v-lazy>
</template>

<style lang="scss" scoped>
input[type='email'] {
  display: block;
  width: 100%;
  padding: 10px 20px;
  margin: 6px 0 16px 0;
  border-radius: 5px;
  opacity: 80%;
  background-color: rgb(var(--v-theme-black));
  color: rgb(var(--v-theme-primary));

  &:focus {
    outline: 2px solid rgb(var(--v-theme-primary));
  }
}
</style>
