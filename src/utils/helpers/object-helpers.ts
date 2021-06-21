export const updateObjectArray = (items: never[], itemId: number, objPropName: string, newObjProps: any) => {
    items.map((item: any) => {
        if (item[objPropName] === itemId) {
            return {...item, newObjProps: !item.newObjProps}
        }
        return item;
    })
}