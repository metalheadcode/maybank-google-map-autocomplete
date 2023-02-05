export default function extractAddress(place) {
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    plain() {
      const city = this.city ? this.city + ', ' : '';
      const zip = this.zip ? this.zip + ', ' : '';
      const state = this.state ? this.state + ', ' : '';
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes('locality')) {
      address.city = value;
    }

    if (types.includes('administrative_area_level_2')) {
      address.state = value;
    }

    if (types.includes('postal_code')) {
      address.zip = value;
    }

    if (types.includes('country')) {
      address.country = value;
    }
  });

  return address;
}
