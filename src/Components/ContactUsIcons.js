import "D:/collegeBuddy/collegebuddy/src/Components/ComponentStyle.css";

function ContactUsIcons(props) {
    return (
        <>
            <div id="contactIcon" className="row">
                <div id='icon' className="col-lg-3 col-md-3 col-sm-3">{props.icon}</div>
                <div className="col-lg-9 col-md-9 col-sm-9">
                    <div id='p1' className="row">{props.head1}</div>
                    <div id='p2' className="row">{props.head2}</div>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default ContactUsIcons;