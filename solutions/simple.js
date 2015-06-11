var findSpecialUser = function (users) {
	var i = 0;
	for (; i < users.length - 1; ++i)
		if (users[i+1].isFollowing(users[i]))
            i;
			//console.log((i+1) + " follows " + i + ": " + (i+1) + " continues");
		else
			if (users[i].isFollowing(users[i+1]))
				users[i+1] = users[i];
			else
				++i;
	return (i == users.length) ? null : users[i];
}

module.exports = findSpecialUser;
