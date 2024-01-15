export const Status = ({ status }: { status: string }) => {
  let statusColor = "";
  let textColor = "";
  switch (status) {
    case "Done":
      statusColor = "bg-bg-green-light";
      textColor = "text-text-filter-green";
      break;
    case "Pending":
      statusColor = "bg-bg-red-light";
      textColor = "text-text-filter-red";
      break;
    case "In Progress":
      statusColor = "bg-bg-yellow-light";
      textColor = "text-text-filter-yellow";
      break;
    case "Rejected":
      statusColor = "bg-bg-gray-light";
      textColor = "text-text-filter-gray";
      break;
    default:
      break;
  }
  return (
    <div
      className={`flex items-center justify-center h-6 w-24 rounded-full ${statusColor} ${textColor}`}
    >
      <p>{status}</p>
    </div>
  );
};
