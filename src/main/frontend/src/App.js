import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Button, Form } from "antd";
import { MarginBottomInput } from "./components/MarginBottomInput";
import { Controller, useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm({});
  useEffect(() => {
    fetch("/hello").then((res) => {
      console.log(res.body);
    });
  }, []);
  const onButtonClick = (data) => {
    console.log(data);
    const name = data.name;
    const amount = data.amount;
    console.log(name);
    console.log(amount);

    const url = "hello/dto/?name=" + name + "&amount=" + amount;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit(onButtonClick)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <MarginBottomInput {...field} />}
      />
      <Controller
        name="amount"
        control={control}
        render={({ field }) => <MarginBottomInput {...field} />}
      />
      <Button type="primary" htmlType="submit">
        객체입력
      </Button>
    </Form>
  );
}

export default App;
