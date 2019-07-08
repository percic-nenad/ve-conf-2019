package defibrilators;

public class User {
	private double lon;
	private double lat;
	private String address;
	
	public User() {
		this.address = "?";
	}
	
	public User(double lon, double lat) {
		this.lon = lon;
		this.lat = lat;
		this.address = "?";
	}
	
	public User(double lon, double lat, String address) {
		this(lon, lat);
		this.address = address;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public boolean dataIsComplete() {
		return this.lon != 0 && this.lat != 0;
	}
	
	public String toString() {
		String address = (this.address == null || this.address.equals("?"))?"Not available":this.address;
		return "lon: " + lon + "; lat: " + lat + "; address: " + address;
	}
	
}
