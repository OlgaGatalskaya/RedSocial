

let renderEntireTree = (state: RootStateType) => {
    console.log('state was changed')
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postData: Array<PostType>
    newPostText: string

}

export type DialogPageType = {
    dialogsData: Array<DialogType>
    messageData: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}


export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'It\'s my first post?', likesCount: 90},
        ],
        newPostText: 'it-kamasutra'
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Olga'},
            {id: 2, name: 'Marina'},
            {id: 3, name: 'Natalia'},
            {id: 4, name: 'Ignat'},
            {id: 5, name: 'Oleg'},
            {id: 6, name: 'Valera'}
        ],
        messageData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Good morning'},
            {id: 4, message: 'Hey'},
            {id: 5, message: 'Bye bye'},
            {id: 6, message: 'Ok'}
        ]
    }

}




export let addPost = (newText: string) => {
    let newPost: PostType = {
        id: 5,
        message: newText,
        likesCount: 2
    };
    state.profilePage.postData.push(newPost)
    //state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

