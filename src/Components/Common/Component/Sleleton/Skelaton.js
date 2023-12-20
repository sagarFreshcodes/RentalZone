import React, { useState } from "react";
import { DotChartOutlined } from "@ant-design/icons";
import { RadioChangeEvent } from "antd";
import {
  Divider,
  Form,
  Radio,
  Skeleton,
  Space,
  Switch,
  List,
  Avatar,
} from "antd";

export const TestSkelaton = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");

  const handleActiveChange = (checked) => {
    setActive(checked);
  };

  const handleBlockChange = (checked) => {
    setBlock(checked);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };

  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };

  return (
    <>
      <Space>
        <Skeleton.Button
          active={active}
          size={size}
          shape={buttonShape}
          block={block}
        />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button
        active={active}
        size={size}
        shape={buttonShape}
        block={block}
      />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form layout="inline" style={{ margin: "16px 0" }}>
        <Space size={16} wrap>
          <Form.Item label="Active">
            <Switch checked={active} onChange={handleActiveChange} />
          </Form.Item>
          <Form.Item label="Button and Input Block">
            <Switch checked={block} onChange={handleBlockChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={handleShapeButton}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};

export const SC_CardSkelaton = () => {
  return (
    <>
      <div className="w-100">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className="SC_CardSkelaton">
              <Skeleton active avatar>
                <List.Item.Meta
                  avatar={<Skeleton.Image active />}
                  title={<a href={`item.href`}>{`item.title`}</a>}
                  description={`item.description`}
                />
                {`item.content`}
              </Skeleton>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const TableSkelaton = () => {
  return (
    <>
      <div className="w-100">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className="SC_CardSkelaton">
              <Skeleton active>
                <List.Item.Meta
                  title={<a href={`item.href`}>{`item.title`}</a>}
                  description={`item.description`}
                />
                {`item.content`}
              </Skeleton>
            </div>
          );
        })}
      </div>
    </>
  );
};
