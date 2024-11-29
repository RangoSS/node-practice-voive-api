// Define role-based permissions
const rolePermissions = {
    admin: ['post_user', 'update_user', 'delete_user'],
    user: ['post_user', 'update_user', 'delete_recipe', 'update_recipe'],
};

export const checkRole = (requiredPermission) => {
    return (req, res, next) => {
        const { role } = req.user; // Assuming `req.user` is populated after JWT verification

        if (!role) {
            return res.status(401).json({ message: 'Unauthorized: Role not found' });
        }

        // Check if the role has the required permission
        const permissions = rolePermissions[role];
        if (!permissions || !permissions.includes(requiredPermission)) {
            return res.status(403).json({
                message: `Forbidden: Your role (${role}) does not have permission to perform this action`,
            });
        }

        next(); // If allowed, proceed to the next middleware or route handler
    };
};
