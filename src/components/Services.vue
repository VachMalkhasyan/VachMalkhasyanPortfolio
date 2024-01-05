<template>
  <div class="bg-green-50 flex  lg:flex lg:items-center lg:justify-center">
    <div class="bg-green-50 page-section features">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/fyuvwkhk.json"
                  trigger="hover"
                  style="width: 150px; height: 150px"></lord-icon>
              </div>
              <div>
                <h4>{{ $t("service.frontEnd")  }}</h4>
                <p>
                  {{ $t("service.frontEndTitle")  }}
                </p>
              </div>
            </div>
          </div>

          <div
            
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="">
                <div class="img-fluid mr-3">
                  <lord-icon
                    src="https://cdn.lordicon.com/rvulxkpr.json"
                    trigger="hover"
                    style="width: 150px; height: 150px"></lord-icon>
                </div>
              </div>
              <div>
                <h4>{{ $t("service.backEnd")  }}</h4>
                <p>
                  {{ $t("service.backEndTitle")  }}
                </p>
              </div>
            </div>
          </div>

          <div
           
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="img-fluid mr-3">
                <lord-icon
                  src="https://cdn.lordicon.com/hyymuwkm.json"
                  trigger="hover"
                  style="width: 150px; height: 150px"></lord-icon>
              </div>
              <div>
                <h5>{{ $t("service.Mobile")  }}</h5>
                <p>
                  {{ $t("service.MobileTitle")  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ServiceProvide"
};
</script>

<style></style>
