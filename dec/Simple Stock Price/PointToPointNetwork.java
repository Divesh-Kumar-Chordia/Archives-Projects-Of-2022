import java.util.LinkedList;
import java.util.Queue;

public class PointToPointNetwork {
    private static final int QUEUE_SIZE = 10; // Set the queue size
    private static final int BANDWIDTH = 10; // Set the bandwidth

    // Node class representing a node in the network
    static class Node {
        private Queue<Integer> queue; // Queue to store packets
        private int bandwidth; // Bandwidth of the node's link

        public Node(int queueSize, int bandwidth) {
            this.queue = new LinkedList<>();
            this.bandwidth = bandwidth;
        }

        // Method to transmit a packet from the queue
        public void transmitPacket() {
            if (!queue.isEmpty()) {
                queue.poll(); // Remove the packet from the front of the queue
            }
        }

        // Method to receive a packet and add it to the queue
        public void receivePacket(int packet) {
            if (queue.size() < QUEUE_SIZE) {
                queue.offer(packet); // Add the packet to the end of the queue
            }
        }

        // Method to get the number of packets dropped
        public int getPacketsDropped() {
            return queue.size() - QUEUE_SIZE;
        }
    }

    public static void main(String[] args) {
        // Create three nodes with the specified queue size and bandwidth
        Node node1 = new Node(QUEUE_SIZE, BANDWIDTH);
        Node node2 = new Node(QUEUE_SIZE, BANDWIDTH);
        Node node3 = new Node(QUEUE_SIZE, BANDWIDTH);

        // Set up the duplex links between the nodes
        node1.receivePacket(1);
        node2.receivePacket(node1.queue.poll());
        node3.receivePacket(node2.queue.poll());

        node3.receivePacket(2);
        node2.receivePacket(node3.queue.poll());
        node1.receivePacket(node2.queue.poll());

        // Print the number of packets dropped at each node
        System.out.println("Packets dropped at node 1: " + node1.getPacketsDropped());
        System.out.println("Packets dropped at node 2: " + node2.getPacketsDropped());
        System.out.println("Packets dropped at node 3: " + node3.getPacketsDropped());
    }
}
