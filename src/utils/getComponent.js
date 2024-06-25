import Text from "../components/type/Text.vue";
import ButtonLink from "../components/type/ButtonLink.vue";
import Form from "../components/type/Form.vue";

const componentsMap = {
  text: Text,
  text_with_button: ButtonLink,
  form_user_data: Form,
};

export const getComponent = (type) => componentsMap[type];