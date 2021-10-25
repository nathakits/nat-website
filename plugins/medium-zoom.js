import Vue from "vue";
import zoom from "medium-zoom";

const initZoom = () => {
  // zoom("img.zoom:not(.medium-zoom-image)");
  zoom("picture.zoom:not(.medium-zoom-image)>img");
};

Vue.mixin({
  mounted() {
    initZoom();
  },
  updated() {
    initZoom();
  }
});
