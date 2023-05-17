import "./submitButton.css";
export default function SubmitButton(props: any) {
  return (
    <div className="button">
      <input
        className="ml-auto width-50"
        type="submit"
        value={props.buttonValue}
      />
    </div>
  );
}
