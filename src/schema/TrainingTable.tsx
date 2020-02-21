export const TrainingTableSchema = {
  name: 'TrainingTable',
  properties: {
    tableId: 'string',
    menus: {
      type: 'list',
      objectType: 'TrainingMenu'
    },
    createdAt: 'date',
    updatedAt: 'date',
  }
};
