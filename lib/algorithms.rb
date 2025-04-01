# frozen_string_literal: true

# Algos Module for algorithms
module Algos
  def insertion_sort(arr)
    key = arr[1]

    i = 0
    while i < arr.length
      j = i + 1

      arr[j + 1] = key while i > -1 && arr[i] < key

      arr[i + 1] = arr[i]
      i += 1
    end

    arr
  end

  def selection_sort; end
  def merge_sort; end
  def heap_sort; end
  def bubble_sort; end
  def quick_sort; end
  def linked_list; end
end
