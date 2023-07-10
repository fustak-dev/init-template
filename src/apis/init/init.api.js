export const handleRequest = async function () {
    try {
        return new Response(JSON.stringify({ success: true }), {
            status: 201
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e }), {
            status: 500
        });
    }
};
