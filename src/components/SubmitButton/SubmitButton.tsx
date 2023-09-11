import "./submitButton.css";
export default function SubmitButton(props: any) {
  console.log(props);
  return (
    <div className="button">
      <input
        className="ml-auto" style={{width: "140px"}}
        type="submit"
        value={props.buttonValue}
      />
    </div>
  );
}
