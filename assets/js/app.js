function openEmailDraft(emailAddress) {
    var subject = encodeURIComponent("Hello");
    var body = encodeURIComponent("This is the body of the email.");
    var mailtoLink =
        "mailto:" + emailAddress + "?subject=" + subject + "&body=" + body;
    window.open(mailtoLink);
}