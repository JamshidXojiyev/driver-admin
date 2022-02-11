function formatLatLng(props) {
  if (props.value) {
    return props.value.map((item) => {
      const testData = {
        latitude: item.lat,
        longitude: item.lng,
      };
      return testData;
    });
  }
}

export default formatLatLng;
