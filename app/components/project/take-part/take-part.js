import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";

class TakePart extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
  }
}

registerPlugins({
  name: "takePart",
  Constructor: TakePart,
  selector: ".take-part"
});
