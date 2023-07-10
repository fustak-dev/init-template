import { Box } from "../components/box";
import { Title } from "../components/title";
import { Text } from "../components/text";

export function IndexContent() {
    return (
        <Box tag="main" minHeight="100vh" padding="32px">
            <Title>Title!!!</Title>
            <Text>This is the index page.</Text>
        </Box>
    );
}
