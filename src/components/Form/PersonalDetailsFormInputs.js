const PersonalDetailsFormInputs = ({ onChangeHandler, value }) => {
  const { firstName, lastName, email, phone } = value;
  // console.log(firstName, lastName, email, phone);
  return (
    <article className="formfields">
      <label htmlFor="firstname" style={{ display: "block" }}>
        <input
          type="text"
          className="firstname"
          id="firstname"
          placeholder="First Name"
          value={firstName}
          onChange={onChangeHandler("firstName")}
          autoComplete="off"
        />
      </label>
      <label htmlFor="lastname" style={{ display: "block" }}>
        <input
          type="text"
          className="lastname"
          id="lastname"
          placeholder="Last Name"
          value={lastName}
          onChange={onChangeHandler("lastName")}
          autoComplete="off"
        />
      </label>
      <label htmlFor="email" style={{ display: "block" }}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChangeHandler("email")}
          autoComplete="off"
        />
      </label>
      <label htmlFor="phone" style={{ display: "block" }}>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={onChangeHandler("phone")}
          autoComplete="off"
        />
      </label>
    </article>
  );
};

export default PersonalDetailsFormInputs;
