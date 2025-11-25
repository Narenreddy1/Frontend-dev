const DashboardPage = () => {
  return (
    <>
      <Layout>
        <div className="flex mb-4 mt-4 mx-2">
          <h1 className=" flex mr-auto text-2xl font-bold">Dashboard</h1>
          <input type="date" className="border bg-white rounded-lg " />
        </div>
        <div className="m-6">
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title="Total Sales" value="₹00" />
            <DashboardCard title="Inventory Items" value="00" />
            <DashboardCard title="Profit" value="₹00" />
          </div>
          
        </div>
      </Layout>
    </>
  );
};
