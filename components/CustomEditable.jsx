import { Box, Flex, Editable, IconButton, EditablePreview, EditableTextarea } from "@chakra-ui/react"
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons"
export function CustomEditable({ content, handleDelete }) {
    return (
        <Flex key={content} align="center" m="2" justify="space-between">
            <Editable
            fontSize='md'
                defaultValue={content}
                isTruncated
            >
                <EditablePreview />
                <EditableTextarea />
            </Editable>
            <Flex>
                <IconButton
                    aria-label="Delete todo"
                    icon={<DeleteIcon />}
                    ml="2"
                    onClick={() => handleDelete()}
                />
            </Flex>
        </Flex>
    )
}