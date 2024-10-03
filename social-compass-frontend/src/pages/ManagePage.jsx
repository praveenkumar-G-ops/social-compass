import Navbar from "../components/Navbar";
import Button from "../components/Styles/Button";
import Heading from "../components/Styles/Heading";

const ManagePage = () => {
  const roles = [
    {
      name: "Brand Admin",
      publishing: false,
      messages: true,
      commentReply: true,
      advancedReports: true,
    },
    {
      name: "Brand owner",
      publishing: true,
      messages: true,
      commentReply: true,
      advancedReports: false,
    },
    {
      name: "Manager",
      publishing: true,
      messages: true,
      commentReply: false,
      advancedReports: false,
    },
    {
      name: "Employee 1",
      publishing: true,
      messages: false,
      commentReply: true,
      advancedReports: false,
    },
    {
      name: "Employee 2",
      publishing: false,
      messages: true,
      commentReply: true,
      advancedReports: false,
    },
    {
      name: "Intern",
      publishing: true,
      messages: false,
      commentReply: true,
      advancedReports: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        {/* Heading */}
        <div className="mt-5 ml-14 mb-10">
          <Heading text={"Manage"} />
        </div>

        <div className="flex-1 overflow-y-auto p-8 mx-20">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-md font-poppins font-semibold">
                Roles and Permissions
              </h2>
              <Button text={"Create New Role"} />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 shadow-3xl">
                    <th className="px-6 py-3 font-poppins text-left text-xs font-medium text-gray-700 tracking-wider">
                      Role name
                    </th>
                    <th className="px-6 py-3 font-poppins text-left text-xs font-medium text-gray-700 tracking-wider">
                      Publishing
                    </th>
                    <th className="px-6 py-3 font-poppins text-left text-xs font-medium text-gray-700 tracking-wider">
                      Messages
                    </th>
                    <th className="px-6 py-3 font-poppins text-left text-xs font-medium text-gray-700 tracking-wider">
                      Comment/reply
                    </th>
                    <th className="px-6 py-3 font-poppins text-left text-xs font-medium text-gray-700 tracking-wider">
                      Advanced reports
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {roles.map((role, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium font-poppins text-gray-900">
                        {role.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 checkbox-cell">
                        <input
                          type="checkbox"
                          checked={role.publishing}
                          readOnly
                          className="form-checkbox h-4 w-4 ml-6 text-[#242565] border-gray-300 rounded focus:ring-[#242565]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 checkbox-cell">
                        <input
                          type="checkbox"
                          checked={role.messages}
                          readOnly
                          className="form-checkbox h-4 w-4 ml-6 text-[#242565] border-gray-300 rounded focus:ring-[#242565]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 checkbox-cell">
                        <input
                          type="checkbox"
                          checked={role.commentReply}
                          readOnly
                          className="form-checkbox h-4 w-4 ml-10 text-[#242565] border-gray-300 rounded focus:ring-[#242565]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 checkbox-cell">
                        <input
                          type="checkbox"
                          checked={role.advancedReports}
                          readOnly
                          className="form-checkbox h-4 w-4 ml-14 text-[#242565] border-gray-300 rounded focus:ring-[#242565]"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
