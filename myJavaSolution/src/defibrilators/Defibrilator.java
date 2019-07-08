package defibrilators;


public class Defibrilator {
    private int id;
    private String name;
    private String address;
    private String phone;
    private double lon;
    private double lat;

    public Defibrilator(){} 

    public Defibrilator(int id, String name, String address, String phone, double lon, double lat) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.lon = lon;
        this.lat = lat;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
    
    @Override
	public String toString() {
		return "Defibrilator [ (" + id + ") " + name + ", address=" + address + ", (lon="
				+ lon + ", lat=" + lat + ")]";
	}

	public boolean dataIsComplete() {
    	return id != 0 && lon != 0 && lat != 0 && (address != null || !address.equals("")) && (name != null || !name.equals("")) && phone != null;
    }
    
    
}
