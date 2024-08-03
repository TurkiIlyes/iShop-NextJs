// import ComboBox from "@/components/utils/ComboBox";
// import CustomInput from "./CustomInput";
// import CustomTextArea from "./CustomTextArea";
// import CustomSelectImage from "./CustomSelectImage";

// type UnifiedInputType =
//   | "text"
//   | "textArea"
//   | "select"
//   | "selectImage"
//   | "selectImages";

// const UnifiedInput = ({
//   type,
//   placeholder,
//   label,
//   data,
// }: {
//   type: UnifiedInputType;
//   placeholder?: string;
//   label: string;
//   data?: { value: string; label: string }[];
// }) => {
//   return (
//     <div className=" flex flex-col gap-3 w-full">
//       <h2 className=" text-base font-medium text-grayscale-800">{label}</h2>
//       {type === "text" && placeholder ? (
//         <CustomInput placeholder={placeholder} />
//       ) : type === "select" && data ? (
//         <ComboBox label={label} data={data} />
//       ) : type === "selectImage" ? (
//         <CustomSelectImage />
//       ) : type === "textArea" && placeholder ? (
//         <CustomTextArea placeholder={placeholder} />
//       ) : null}
//     </div>
//   );
// };

// export default UnifiedInput;
