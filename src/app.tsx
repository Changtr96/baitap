import Button from "./components/button";
import Content from "./components/content";

export default function App() {
  return (
    <div className="mt-8 ml-auto mr-auto w-full flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-6">
        <Button
          title="Hello"
          type="primary"
          onClick={() => {
            console.log(`Hello`);
          }}
        ></Button>
        <Button
          title="Halo"
          type="secondary"
          onClick={() => {
            console.log(`Halo`);
          }}
        ></Button>
        <Button
          title="Delete"
          type="destructive"
          onClick={() => {
            console.log(`Delete`);
          }}
        ></Button>
      </div>

      <div className="flex gap-6">
        <Content
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          maxChar={300}
        />
        <Content
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          maxChar={300}
        />
        <Content
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          maxChar={300}
        />
      </div>
    </div>
  );
}
