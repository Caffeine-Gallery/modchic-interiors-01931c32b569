import Text "mo:base/Text";
import Array "mo:base/Array";
import Time "mo:base/Time";

actor {
    // Type for contact form submissions
    type Contact = {
        name: Text;
        email: Text;
        message: Text;
        timestamp: Time.Time;
    };

    // Store contact submissions
    stable var contacts : [Contact] = [];

    // Submit contact form
    public func submitContact(name: Text, email: Text, message: Text) : async () {
        let newContact : Contact = {
            name = name;
            email = email;
            message = message;
            timestamp = Time.now();
        };
        
        contacts := Array.append(contacts, [newContact]);
    };

    // Get all contacts (admin function)
    public query func getContacts() : async [Contact] {
        contacts
    };
}
