Create a to-do list app 


## Must
- Render content with react
- Use local storage to store to-do list data
- Display items on-screen
- Have three total views (All, completed, to-do)
- Display text prompting user to add an item
- Show total/total number remaining items
- Have ability to cross out/check off items completed - one or all at once
- remove completed items (archive)
- button press to make checked off items active again

## Should
- 

## Could
- Have editable items

## Won't
- 

---
    
## App

### Model
    todo item array
    filter by state
    
### View
    - render() - on button press, render text in itemsArray to screen
        radio buttons for individual list items/their delete buttons
    - hide() - removes items from screen based on button clicked

### Controller

        add():
            User types in input bar, presses button
            IF input contains text
                create new todo item
                    newTodo = {
                        key - timestamp of current date/time
                        toDo - input info
                        active - default true
                        hidden - default false
                    }
                text stored to itemsArray as item: active
                put item in beginning of array so that input text displays as top item on list 
                set state
                increment count // doesnt matter when, as long at it happens in this method
                stores to local storage as JSON in itemsArray (componentDidUpdate())
                info in itemsArray mapped over and parsed to display
                List appears on the view
            ELSE display message saying "please enter a to-do list item"

        complete():
            IF "complete" button on item pressed
            item: active becomes false
            
        delete():
            IF "delete" button pressed
            item hidden becomes 'true'

          
        updateFilterByStatus(newStatus):
            newStatus => 0,1,2 || 'active', 'all', 'completed'
            setState() - change item status - 0, 1, 2 - all, complete, active
                IF "show all" button clicked, display all items in itemsArray
                IF "show active" button clicked, display only active items in itemsArray
                IF "show completed" button clicked, display only completed items in itemsArray
            

        clearAll():
            IF "clear all" button clicked, change all items' status to inactive and hide inactive
        
        componentDidMount():
            Load app: 
            1. mostly empty page - input bar, prompt to enter info, button to add input info to page/itemsArray, footer with display options
            2. gets items from localstorage on page load
            3. check if data exists in itemsArray, if so, parse and populate page with that info

        componentDidUpdate():
            


    
## Items
 
### Model


### View

### Controller

## Other Component 2
 
### Model

### View

### Controller
    


