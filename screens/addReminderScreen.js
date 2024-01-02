import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const AddReminderScreen = () => {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const addReminder = () => {
    if (title && date) {
      const newReminder = {
        id: Math.random().toString(), // Generating a unique ID (you might use another approach)
        title: title,
        date: date,
        // Other properties related to the reminder
      };

      setReminders([...reminders, newReminder]);
      // Clear input fields after adding the reminder
      setTitle('');
      setDate('');
    } else {
      // Handle case where inputs are empty
      // For example, show an error message
    }
  };

  const deleteReminder = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          placeholder="Enter date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <Button title="Add Reminder" onPress={addReminder} />
      </View>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
            <Button title="Delete" onPress={() => deleteReminder(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default AddReminderScreen;