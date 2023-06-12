const NAME_PATTERN = "[A-Za-z0-9_]*"
const OPTIONAL_WS = "\\s{0,}"
const NEEDED_WS = "\\s{1,}"

const IMPORT_TYPES = ['class', 'type', 'task']

const IMPORT_PATTERN = `^(${IMPORT_TYPES.join('|')}):import${NEEDED_WS}${NAME_PATTERN}(?:${NEEDED_WS}from${NEEDED_WS}${NAME_PATTERN})*$`

const TASK_RUN_PATTERN = `^${NAME_PATTERN}${OPTIONAL_WS}=${OPTIONAL_WS}\(${NAME_PATTERN}(?:${OPTIONAL_WS},${OPTIONAL_WS}${NAME_PATTERN})\)$`

module.exports = {
    import: new RegExp(IMPORT_PATTERN),
    runTask: new RegExp(TASK_RUN_PATTERN)
}