import Realm from 'realm';

const TrainingMenuSchema: Realm.ObjectSchema = {
    name: 'TrainingMenu',
    primaryKey: 'trainingId',
    properties: {
        trainingId: 'string',
        title: 'string',
        createdAt: 'date',
        updatedAt: 'date',
    }
}