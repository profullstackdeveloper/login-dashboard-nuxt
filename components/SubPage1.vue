<template>
          <div class="w-full flex flex-col">
              <div class="flex flex-col items-center"
              >
                <div
                  class="
                    text-title1
                    mt-8
                    w-10/12
                    text-center text-subHeaderText
                    font-semibold
                  "
                >
                <p>
                 Drei  einfache Schritte </p>
                 <p>zu deinem neuen Job</p>
                </div>
              </div>
              <div class="w-full flex flex-col" >
                <div
                  class="w-full pb-30"
            
                ></div>
                <div
                  class="w-80 h-64"
                 
                >
                  <div class="flex flex-row-reverse mr-2">
                    <img src="/images/undraw_Profile_data_re_v81r.svg" />
                  </div>
                  <div class="flex flex-row items-end relative -mt-24">
                    <span class="font-numberFont text-number text-colorNumber mt-10">1.</span>
                    <span class="ml-5 font-numberFont text-content text-gray-500 pb-7">Erstellen dein Unternehmensprofil</span>
                  </div>
                </div>
                <div
                  class="w-full mt-1 pb-16 second-background">
                  <div class="ml-8 flex flex-row items-end">
                    <span class="font-numberFont text-number text-colorNumber">2.</span>
                    <span class="ml-5 font-numberFont text-content text-gray-500 pb-7">
                      Erstellen dein Lebenslauf
                    </span>
                  </div>
                  <div class="ml-28">
                    <img src="/images/undraw_task_31wc.svg" class="h-32" />
                  </div>
                </div>
                <div
                  class="ml-16 w-tab3 h-96 float-right -mt-10"
                >
                  <div class="flex flex-row">
                    <span class="font-numberFont text-number text-colorNumber">3.</span>
                    <span class="font-numberFont ml-5 text-content text-gray-500 mt-20">Mit nur einem Klick bewerben</span>
                  </div>
                  <div class="ml-4">
                    <img src="/images/undraw_personal_file_222m.svg" class="h-40" />
                  </div>
                </div>
              </div>
          </div>
</template>

<script>
export default {
    name:"SubPage1",
}
</script>
<style scoped>
.second-background {
  background: url("/images/second_background.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>