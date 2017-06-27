export const CHANGE_ITEM_VIEW = 'CHANGE_ITEM_VIEW'
export const changeItemView = (viewType) => {
    return {
        type: CHANGE_ITEM_VIEW,
        data: viewType
    }
}