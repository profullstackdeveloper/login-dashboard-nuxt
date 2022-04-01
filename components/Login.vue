<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
   <link
      href="https://fonts.googleapis.com/css2?family=Lato"
      rel="stylesheet"
    />

    <div class="max-w-sm overflow-hidden">
      <div class="flex flex-col items-center w-full h-screen">
        <div class="header w-full flex flex-grow-0 flex-shrink-0 flex-col">
          <div
            class="
              w-full
              bg-gradient-to-l
              from-linePrimary
              to-lineSecondary
              h-1
            "
          ></div>
          <div
            class="
              flex flex-row-reverse
              items-center
              w-full
              rounded-b-2xl
              h-16
              shadow-jobsite
              z-10
              bg-white
            "
          >
            <div class="mr-4 text-loginText">
              <nuxt-link to="#"> Login </nuxt-link>
            </div>
          </div>
        </div>

        <div class="content w-full flex-auto overflow-y-auto overflow-x-hidden">
          <div class="w-full pb-16 first-background">
            <div class="w-full">
              <div class="flex flex-col items-center">
                <span class="font-numberFont items-center text-jobsite text-headerText">
                  Deine Job
                </span>
                <span class="font-numberFont items-center text-jobsite text-headerText">
                  website
                </span>
              </div>
            </div>
            <img src="/images/1.png" class="w-full" />
          </div>

          <div
            class="flex flex-row ml-5 w-max transition"
            v-bind:class="{
              'transform translate-x-0 transition duration-500 ': buttonPosition == 0,
              'transform -translate-x-20 transition  duration-500': buttonPosition == 1,
              'transform -translate-x-60 transition  duration-500': buttonPosition == 2,
            }"
          >
            <button
              v-for="i in [0, 1, 2]"
              :key="i"
              class="
                w-40
                h-10
                transition ease-out
                text-buttonText
                border-buttonBorder border-1
                focus:border-1
                focus:border-buttonBorder
                focus:outline-none
              "
              :class="{ 'rounded-l-2xl': i == 0, 'rounded-r-2xl': i == 2,  }"
              v-on:click="clickStart(i)"
            >
              {{buttonContent[i]}}
            </button>
            <button
              class="
                w-40
                h-10
               bg-forButton
               text-white
                transition ease-out
                outline-none 
                border-transparent
                border-buttonBorder border-1
                focus:border-transparent
                focus:border-buttonBorder
                focus:outline-none

              "
              :class="{ 'rounded-l-2xl transform -translate-x-120 transition duration-500': buttonPosition == 0, 'rounded-r-2xl transform -translate-x-40 transition duration-500': buttonPosition == 2, 'transform -translate-x-80 transition duration-500' : buttonPosition == 1}"
            >
              {{buttonContent[buttonPosition]}}
            </button>

          </div>
          <div class="w-full relative"> 
            <transition
              enter-class="opacity-0"
              enter-to-class="opacity-100 duration-500"
              leave-class="opacity-100"
              leave-to-class="opacity-0 duration-500"
              
            >
              <SubPage1 v-if="buttonPosition == 0"  class="absolute top-0"/>
            </transition>

            <transition
              enter-class="opacity-0"
              enter-to-class="opacity-100 duration-500"
              leave-class="opacity-100"
              leave-to-class="opacity-0 duration-500"
              
            >
              <SubPage2 v-if="buttonPosition == 1"  class="absolute top-0"/>
            </transition>
            <transition
              enter-class="opacity-0"
              enter-to-class="opacity-100 duration-500"
              leave-class="opacity-100"
              leave-to-class="opacity-0 duration-500"
              
            >
              <SubPage3 v-if="buttonPosition == 2"  class="absolute top-0"/>
            </transition>

          </div>
          

        </div>
        <div
          class="
            footer
            w-full
            flex flex-grow-0 flex-shrink-0 flex-col
            items-center
            h-20
            bg-white
            rounded-t-2xl
            shadow-up
            z-10
          "
        >
          <button
            class="
              bg-gradient-to-r
              from-linePrimary
              to-lineSecondary
              w-4/5
              rounded-xl
              mx-5
              h-10
              mt-6
              focus:outline-none
            "
          >
            <span class="text-button1 text-white">Kostenlos Registrieren</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubPage1 from './SubPage1'
import SubPage2 from './SubPage2'
import SubPage3 from './SubPage3'

export default {
  components: { SubPage2 },
  data: function () {
    return {
      buttonPosition: 0,
      buttonContent : [
        'Arbeitnehmer','Arbeitgeber','Temporärbüro'

      ],
      images: [
        "/images/undraw_Profile_data_re_v81r.svg",
        "/images/undraw_task_31wc.svg",
        "/images/undraw_personal_file_222m.svg",
      ],
      contents: [
        "Erstellen dein Lebenslauf",
        "Erstellen dein Lebenslauf",
        "Mit nur einem Klick bewerben",
        "Drei einfache Schritte zu deinem neuen Job",
      ],
      screenClicked : false
    };
  },
  methods: {
    clickStart(e) {
      this.buttonPosition = e;
      if (e == 0) {
        this.images = [
          "/images/undraw_Profile_data_re_v81r.svg",
          "/images/undraw_task_31wc.svg",
          "/images/undraw_personal_file_222m.svg",
        ];
        this.contents = [
          "Erstellen dein Lebenslauf",
          "Erstellen dein Lebenslauf",
          "Mit nur einem Klick bewerben",
          "Drei einfache Schritte zu deinem neuen Job",
        ];
      } else if (e == 1) {
        this.images = [
          "/images/undraw_Profile_data_re_v81r.svg",
          "/images/undraw_about_me_wa29.svg",
          "/images/undraw_swipe_profiles1_i6mr.svg",
        ];
        this.contents = [
          "Erstellen dein Unternehmensprofil",
          "Erstellen ein Jobinserat",
          "Wähle deinen neuen Mitarbeiter aus",
          "Drei einfache Schritte zu deinem neuen Mitarbeiter",
        ];
      } else if (e == 2) {
        this.images = [
          "/images/undraw_Profile_data_re_v81r.svg",
          "/images/undraw_job_offers_kw5d.svg",
          "/images/undraw_business_deal_cpi9%20(1).svg",
        ];
        this.contents = [
          "Erstellen dein Unternehmensprofil",
          "Erhalte Vermittlungs- angebot von Arbeitgeber",
          "Vermittlung nach Provision oder Stundenlohn",
          "Drei einfache Schritte zur Vermittlung neuer Mitarbeiter",
        ];
      }
    },
    handleClick() {
      this.screenClicked = true;
    }
  },
};
</script>



<style scoped>
.first-background {
  background: url("/images/first_background.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.second-background {
  background: url("/images/second_background.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}

.-translate-x-120 {
    --tw-translate-x: -30rem/* -160px */;
}

</style>
