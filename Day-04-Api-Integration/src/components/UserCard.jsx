function UserCard({ user }) {

  return (

    <div className="zp-card">

      <h2>
        {user.name}
      </h2>

      <p>
        📧 {user.email}
      </p>

      <p>
        📞 {user.phone}
      </p>

      <p>
        🌐 {user.website}
      </p>

      <p>
        🏢 {user.company.name}
      </p>

    </div>
  )
}

export default UserCard
