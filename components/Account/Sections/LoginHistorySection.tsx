// import {
//   columns,
//   LoginHistory,
// } from "@/components/Common/DataTable/Columns/LoginHistoryColumn";
// import LoginHistoryDataTable from "@/components/Common/DataTable/SimpleDataTable";

// async function getData(): Promise<LoginHistory[]> {
//   return [
//     { id: "1", date: "2024-01-01", ip: "192.168.0.1", client: "Firefox" },
//     { id: "2", date: "2024-01-02", ip: "192.168.0.2", client: "Chrome" },
//     { id: "3", date: "2024-01-03", ip: "192.168.0.3", client: "Safari" },
//     { id: "4", date: "2024-01-04", ip: "192.168.0.4", client: "Edge" },
//     { id: "5", date: "2024-01-05", ip: "192.168.0.5", client: "Opera" },
//     { id: "6", date: "2024-01-06", ip: "192.168.0.6", client: "Firefox" },
//     { id: "7", date: "2024-01-07", ip: "192.168.0.7", client: "Chrome" },
//     { id: "8", date: "2024-01-08", ip: "192.168.0.8", client: "Safari" },
//     { id: "9", date: "2024-01-09", ip: "192.168.0.9", client: "Edge" },
//     { id: "10", date: "2024-01-10", ip: "192.168.0.10", client: "Opera" },
//     { id: "11", date: "2024-01-11", ip: "192.168.1.1", client: "Firefox" },
//     { id: "12", date: "2024-01-12", ip: "192.168.1.2", client: "Chrome" },
//     { id: "13", date: "2024-01-13", ip: "192.168.1.3", client: "Safari" },
//     { id: "14", date: "2024-01-14", ip: "192.168.1.4", client: "Edge" },
//     { id: "15", date: "2024-01-15", ip: "192.168.1.5", client: "Opera" },
//     { id: "16", date: "2024-01-16", ip: "192.168.1.6", client: "Firefox" },
//     { id: "17", date: "2024-01-17", ip: "192.168.1.7", client: "Chrome" },
//     { id: "18", date: "2024-01-18", ip: "192.168.1.8", client: "Safari" },
//     { id: "19", date: "2024-01-19", ip: "192.168.1.9", client: "Edge" },
//     { id: "20", date: "2024-01-20", ip: "192.168.1.10", client: "Opera" },
//   ];
// }

// const LoginHistorySection = async () => {
//   const data = await getData();
//   return (
//     <div className=" flex flex-col gap-3 py-8 px-5 bg-grayscale-200 rounded-xl shadow-[0px_0px_3px] shadow-grayscale-500 ">
//       <div className=" flex flex-col gap-2">
//         <h3 className=" text-lg font-semibold text-grayscale-800">
//           Login History
//         </h3>
//         <p className=" text-xs font-medium text-grayscale-600">
//           Your recent login activity
//         </p>
//       </div>
//       <LoginHistoryDataTable columns={columns} data={data} />
//     </div>
//   );
// };

// export default LoginHistorySection;
