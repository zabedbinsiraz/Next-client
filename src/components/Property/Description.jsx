import { Form, Input } from "antd";

import TextArea from "antd/lib/input/TextArea";

const Description = () => {
  return (
    <div className="_housiko_list_prop_characterstics _housiko_list_prop_characterstics_big_input_wrap">
      <h3 className="_housiko_list_prop_characterstics_address_title">
        Description
      </h3>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="title">
            <Input
              className="_housiko_list_prop_characterstics_input"
              placeholder="Title"
            />
          </Form.Item>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="description">
            <TextArea
              className="_housiko_list_prop_characterstics_input"
              style={{
                height: 120,
              }}
              placeholder="Tell us about your property"
            />
          </Form.Item>
        </div>
      </div>
      <div className="_housiko_list_prop_characterstics_input_wrap">
        <div className="_housiko_list_prop_characterstics_input_inner">
          <Form.Item name="common_cost">
            <Input
              className="_housiko_list_prop_characterstics_input"
              placeholder="Description of common costs, if any"
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Description;
