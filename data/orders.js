// Static mock data for the order tracking screen.
// Each entry represents a different real-world situation the screen
// needs to handle, but they all share the same shape so the UI never
// has to branch on "which order is this" - just on the fields below.

const orders = {
  normal: {
    key: "normal",
    state: "on_time",
    orderNumber: "#ORD-48213",
    placedOn: "Sep 20, 2026",
    carrier: "FastShip Logistics",
    trackingId: "FS3391827465US",
    address: "482 Birchwood Lane, Austin, TX 78701",
    trackingAvailable: true,
    estimatedDelivery: "Today, by 8:00 PM",
    statusLabel: "Out for Delivery",
    statusDescription: "Your package is on the truck and headed your way.",
    product: {
      name: "Wireless Noise-Cancelling Headphones",
      variant: "Midnight Black",
      qty: 1,
      price: "$179.00",
    },
    timeline: [
      { key: "processing", label: "Processing", timestamp: "Sep 20, 9:14 AM", status: "complete" },
      { key: "shipped", label: "Shipped", timestamp: "Sep 21, 6:02 PM", status: "complete" },
      { key: "out_for_delivery", label: "Out for Delivery", timestamp: "Today, 7:45 AM", status: "current" },
      { key: "delivered", label: "Delivered", timestamp: "Expected today", status: "upcoming" },
    ],
  },

  delayed: {
    key: "delayed",
    state: "delayed",
    orderNumber: "#ORD-48197",
    placedOn: "Sep 17, 2026",
    carrier: "FastShip Logistics",
    trackingId: "FS3390115820US",
    address: "482 Birchwood Lane, Austin, TX 78701",
    trackingAvailable: true,
    estimatedDelivery: "Sep 24, 2026",
    newEstimatedDelivery: "Sep 26, 2026",
    statusLabel: "Delivery Delayed",
    statusDescription:
      "Your package is taking longer than expected. It's still moving and we're keeping an eye on it.",
    product: {
      name: "Ceramic Pour-Over Coffee Set",
      variant: "Sand",
      qty: 1,
      price: "$64.00",
    },
    timeline: [
      { key: "processing", label: "Processing", timestamp: "Sep 17, 10:20 AM", status: "complete" },
      { key: "shipped", label: "Shipped", timestamp: "Sep 18, 4:40 PM", status: "complete" },
      { key: "out_for_delivery", label: "Out for Delivery", timestamp: "Delayed in transit", status: "current", delayed: true },
      { key: "delivered", label: "Delivered", timestamp: "New estimate: Sep 26", status: "upcoming" },
    ],
  },

  delivered_not_received: {
    key: "delivered_not_received",
    state: "delivered_not_received",
    orderNumber: "#ORD-48052",
    placedOn: "Sep 12, 2026",
    carrier: "FastShip Logistics",
    trackingId: "FS3387420193US",
    address: "482 Birchwood Lane, Austin, TX 78701",
    trackingAvailable: true,
    estimatedDelivery: "Sep 15, 2026",
    statusLabel: "Delivered",
    statusDescription: "Marked as delivered on Sep 15, 3:12 PM.",
    product: {
      name: "Stainless Steel Water Bottle, 32oz",
      variant: "Forest Green",
      qty: 2,
      price: "$38.00",
    },
    timeline: [
      { key: "processing", label: "Processing", timestamp: "Sep 12, 11:05 AM", status: "complete" },
      { key: "shipped", label: "Shipped", timestamp: "Sep 13, 2:30 PM", status: "complete" },
      { key: "out_for_delivery", label: "Out for Delivery", timestamp: "Sep 15, 8:10 AM", status: "complete" },
      { key: "delivered", label: "Delivered", timestamp: "Sep 15, 3:12 PM", status: "complete" },
    ],
  },

  no_tracking: {
    key: "no_tracking",
    state: "no_tracking",
    orderNumber: "#ORD-48260",
    placedOn: "Today, 11:40 AM",
    carrier: null,
    trackingId: null,
    address: "482 Birchwood Lane, Austin, TX 78701",
    trackingAvailable: false,
    estimatedDelivery: "Sep 29 - Oct 1, 2026",
    statusLabel: "Order Confirmed",
    statusDescription: "We're preparing your order. Tracking will appear here once it ships.",
    product: {
      name: "Linen Throw Blanket",
      variant: "Oatmeal",
      qty: 1,
      price: "$52.00",
    },
    timeline: [
      { key: "processing", label: "Processing", timestamp: "Today, 11:40 AM", status: "current" },
      { key: "shipped", label: "Shipped", timestamp: "Pending", status: "upcoming" },
      { key: "out_for_delivery", label: "Out for Delivery", timestamp: "Pending", status: "upcoming" },
      { key: "delivered", label: "Delivered", timestamp: "Pending", status: "upcoming" },
    ],
  },
};

export default orders;
