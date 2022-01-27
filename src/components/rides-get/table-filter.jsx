export default function RideTableData(id, data) {
  switch (id) {
    case 0:
      const pending = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Last driver name",
          "Start location",
          "Destination location",
          "State",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            last_driver_name: item.last_driver_name,
            start_location: item.start_location.location_name,
            destination_location: item.destination_location,
            state: item.state,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "last_driver_name",
          "start_location",
          "destination_location",
          "state",
        ],
      };
      return pending;
      break;
    case 1:
      const in_progress = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Driver name",
          "Driver phone",
          "Start location",
          "Destination location",
          "State",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            driver_name: item.driver_name,
            driver_phone: item.driver_phone,
            start_location: item.start_location.location_name,
            destination_location: item.destination_location,
            state: item.state,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "driver_name",
          "driver_phone",
          "start_location",
          "destination_location",
          "state",
        ],
      };
      return in_progress;
      break;
    case 2:
      const completed = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Driver name",
          "Driver phone",
          "Start location",
          "Destination location",
          "Total cost",
          "Payment method",
          "Payment state",
          "Starting",
          "Start wait time",
          "Per km",
          "Ride distance",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            driver_name: item.driver_name,
            driver_phone: item.driver_phone,
            start_location: item.start_location.location_name,
            destination_location:
              item?.destination_location?.location_name || "",
            total_cost: item.total_cost,
            payment_method: item.payment_method,
            payment_state: item.payment_state,
            starting: item.starting,
            start_wait_time: item.start_wait_time,
            per_km: item.per_km,
            ride_distance: item.ride_distance,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "driver_name",
          "driver_phone",
          "start_location",
          "destination_location",
          "total_cost",
          "payment_method",
          "payment_state",
          "starting",
          "start_wait_time",
          "per_km",
          "ride_distance",
        ],
      };
      return completed;
      break;
    case 3:
      const upcoming = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Start location",
          "Destination location",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            start_location: item.start_location.location_name,
            destination_location:
              item?.destination_location?.location_name || "",
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "start_location",
          "destination_location",
        ],
      };
      return upcoming;
      break;
    case 4:
      const pre_cancelled = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Start location",
          "Destination location",
          "State",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            start_location: item.start_location.location_name,
            destination_location:
              item?.destination_location?.location_name || "",
            state: item.state,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "start_location",
          "destination_location",
          "state",
        ],
      };
      return pre_cancelled;
      break;
    case 5:
      const cancelled_by_driver = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Driver name",
          "Driver phone",
          "Cancel reason",
          "Start location",
          "Destination location",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            driver_name: item.driver_name,
            driver_phone: item.driver_phone,
            cancel_reason: item.cancel_reason,
            start_location: item.start_location.location_name,
            destination_location:
              item?.destination_location?.location_name || "",
            state: item.state,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "driver_name",
          "driver_phone",
          "cancel_reason",
          "start_location",
          "destination_location",
        ],
      };
      return cancelled_by_driver;
      break;
    case 6:
      const cancelled_by_client = {
        header: [
          "",
          "Ordered time",
          "Rider name",
          "Rider phone",
          "Car class name",
          "Cancel reason",
          "Start location",
          "Destination location",
        ],
        body: data.map((item) => {
          const testData = {
            ordered_time: new Date(item.ordered_time).toLocaleDateString("ru"),
            rider_name: item.rider_name,
            rider_phone: item.rider_phone,
            car_class_name: item.car_class_name,
            cancel_reason: item.cancel_reason,
            start_location: item.start_location.location_name,
            destination_location:
              item?.destination_location?.location_name || "",
            state: item.state,
            id: item._id,
          };
          return testData;
        }),
        order: [
          "view",
          "ordered_time",
          "rider_name",
          "rider_phone",
          "car_class_name",
          "cancel_reason",
          "start_location",
          "destination_location",
        ],
      };
      return cancelled_by_client;
      break;
  }
}
