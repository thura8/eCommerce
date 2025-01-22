import React, {useState} from 'react';

import ContainerLayout from '@components/common/ContainerLayout';

import OrderTabs from '@components/others/DashBoard/OrderTabs';
import OrderList from '@components/others/DashBoard/OrderList';
import NoSavedPages from '@components/common/NoSavedItems';

const MyOrderScreen = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [showOrders, setShowOrders] = useState(false);
  return (
    <ContainerLayout headerTitle={'My Order'} noScroll>
      {showOrders ? (
        <>
          <OrderTabs
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />

          <OrderList activeTabIndex={activeTabIndex} />
        </>
      ) : (
        <NoSavedPages
          icon={require('@assets/icons/order.png')}
          title="No Ongoing Orders!"
          subtitle="You don't have any ongoing"
          description="orders at this time"
        />
      )}
    </ContainerLayout>
  );
};

export default MyOrderScreen;
