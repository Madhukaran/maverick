export default function Table(props) {
  return (
    <>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Batsman
            </th>
            <th scope="col" className="px-6 py-4">
              R
            </th>
            <th scope="col" className="px-6 py-4">
              B
            </th>
            <th scope="col" className="px-6 py-4">
              4&apos;s
            </th>
            <th scope="col" className="px-6 py-4">
              6&apos;s
            </th>
            <th scope="col" className="px-6 py-4">
              SR
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">SS</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
          </tr>
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">SS</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
          </tr>
          <tr className="border-b dark:border-neutral-500">
          <th scope="col" className="px-6 py-4">
              Bowler
            </th>
            <th scope="col" className="px-6 py-4">
              R
            </th>
            <th scope="col" className="px-6 py-4">
              B
            </th>
            <th scope="col" className="px-6 py-4">
              W
            </th>
            <th scope="col" className="px-6 py-4">
           M
            </th>
            
          </tr>
          <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4">rr</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">4</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
            <td className="whitespace-nowrap px-6 py-4">0</td>
      
          </tr>
        </tbody>
      </table>
    </>
  );
}
