function formatLatitudeLongitude(props) {
  if (props.value) {
    return props.value?.map((item) => {
      const testData = {
        lat: item.latitude,
        lng: item.longitude,
      };
      return testData;
    });
  }
}

export default formatLatitudeLongitude;
